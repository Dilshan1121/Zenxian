/* ============================================================
  ZENXIAN calendar.js
  Calendar widget for contact.html
  ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

 var MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
 ];

 var DAYS = ['MON','TUE','WED','THU','FRI','SAT','SUN'];

 var TIME_SLOTS = ['09:00 AM','11:30 AM','02:00 PM','04:30 PM'];

 var today = new Date();

 var state = {
  year:    today.getFullYear(),
  month:    today.getMonth(),
  selectedDay: today.getDate(),
  selectedSlot: null
 };

 /* Helpers */
 function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
 }

 function getFirstDayOfMonth(year, month) {
  // Convert Sunday=0 to Monday=0
  return (new Date(year, month, 1).getDay() + 6) % 7;
 }

 /* DOM refs */
 var monthHeading  = document.getElementById('cal-month-heading');
 var gridEl     = document.getElementById('cal-grid');
 var slotsSection  = document.getElementById('cal-slots-section');
 var slotsGrid   = document.getElementById('cal-slots-grid');
 var prevBtn    = document.getElementById('cal-prev');
 var nextBtn    = document.getElementById('cal-next');

 /* Build day-label header (runs once) */
 var daysHeaderEl = document.getElementById('cal-days-header');
 if (daysHeaderEl) {
  DAYS.forEach(function (d) {
   var span = document.createElement('div');
   span.className = 'calendar-day-label';
   span.textContent = d;
   daysHeaderEl.appendChild(span);
  });
 }

 /* Main render */
 function renderCalendar() {
  if (!monthHeading || !gridEl) return;

  monthHeading.textContent = MONTH_NAMES[state.month] + ' ' + state.year;

  var daysInMonth = getDaysInMonth(state.year, state.month);
  var firstDay  = getFirstDayOfMonth(state.year, state.month);
  var totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

  gridEl.innerHTML = '';

  for (var i = 0; i < totalCells; i++) {
   var dayNum = i - firstDay + 1;
   var isValid = dayNum >= 1 && dayNum <= daysInMonth;

   var isToday = isValid &&
    dayNum === today.getDate() &&
    state.month === today.getMonth() &&
    state.year === today.getFullYear();

   var isSelected = isValid && dayNum === state.selectedDay;

   var btn = document.createElement('button');
   btn.type = 'button';
   btn.className = 'calendar-day';
   btn.textContent = isValid ? dayNum : '';

   if (!isValid) {
    btn.classList.add('calendar-day--empty');
    btn.disabled = true;
   } else if (isSelected) {
    btn.classList.add('calendar-day--selected');
   } else if (isToday) {
    btn.classList.add('calendar-day--today');
   }

   if (isValid) {
    (function (day) {
     btn.addEventListener('click', function () {
      state.selectedDay = day;
      state.selectedSlot = null;
      renderCalendar();
     });
    })(dayNum);
   }

   gridEl.appendChild(btn);
  }

  /* Show/hide time slots */
  if (slotsSection) {
   slotsSection.style.display = state.selectedDay ? '' : 'none';
  }

  renderSlots();
 }

 /* Render time slots */
 function renderSlots() {
  if (!slotsGrid) return;
  slotsGrid.innerHTML = '';

  TIME_SLOTS.forEach(function (slot) {
   var btn = document.createElement('button');
   btn.type = 'button';
   btn.className = 'time-slot';
   btn.textContent = slot;

   if (state.selectedSlot === slot) {
    btn.classList.add('time-slot--selected');
   }

   btn.addEventListener('click', function () {
    state.selectedSlot = slot;
    renderSlots();
   });

   slotsGrid.appendChild(btn);
  });
 }

 /* Navigation */
 if (prevBtn) {
  prevBtn.addEventListener('click', function () {
   if (state.month === 0) {
    state.month = 11;
    state.year--;
   } else {
    state.month--;
   }
   state.selectedDay = null;
   state.selectedSlot = null;
   renderCalendar();
  });
 }

 if (nextBtn) {
  nextBtn.addEventListener('click', function () {
   if (state.month === 11) {
    state.month = 0;
    state.year++;
   } else {
    state.month++;
   }
   state.selectedDay = null;
   state.selectedSlot = null;
   renderCalendar();
  });
 }

 /* Initial render */
 renderCalendar();

});
