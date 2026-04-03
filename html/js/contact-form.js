/* ============================================================
   ZENXIAN — contact-form.js
   Form validation and submit handler
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  var form       = document.getElementById('contact-form');
  var submitBtn  = document.getElementById('form-submit-btn');
  var formWrap   = document.getElementById('form-wrap');

  if (!form) return;

  /* Validation rules (from src/lib/schemas.ts) */
  function validateForm(data) {
    var errors = {};

    if (!data.fullName || data.fullName.trim().length < 2) {
      errors.fullName = 'Full name must be at least 2 characters';
    }

    if (!data.workEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.workEmail)) {
      errors.workEmail = 'Please enter a valid work email';
    }

    if (!data.companySize || data.companySize === '') {
      errors.companySize = 'Please select your organization scale';
    }

    if (!data.projectDetails || data.projectDetails.trim().length < 20) {
      errors.projectDetails = 'Please describe your project in at least 20 characters';
    }

    return errors;
  }

  /* Clear all error messages */
  function clearErrors() {
    form.querySelectorAll('.form-error').forEach(function (el) {
      el.textContent = '';
    });
  }

  /* Show error messages */
  function showErrors(errors) {
    Object.keys(errors).forEach(function (field) {
      var el = document.getElementById('error-' + field);
      if (el) el.textContent = errors[field];
    });
  }

  /* Show success state */
  function showSuccess() {
    if (!formWrap) return;
    formWrap.innerHTML =
      '<div class="form-success">' +
        '<div class="form-success__icon">✓</div>' +
        '<h3 class="form-success__title">Request Submitted</h3>' +
        '<p class="form-success__p">Our team will reach out within 24 hours.</p>' +
      '</div>';
  }

  /* Submit handler */
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    clearErrors();

    var data = {
      fullName:       form.querySelector('#field-fullName').value,
      workEmail:      form.querySelector('#field-workEmail').value,
      companySize:    form.querySelector('#field-companySize').value,
      projectDetails: form.querySelector('#field-projectDetails').value
    };

    var errors = validateForm(data);

    if (Object.keys(errors).length > 0) {
      showErrors(errors);
      return;
    }

    /* Simulate async submission */
    if (submitBtn) {
      submitBtn.disabled    = true;
      submitBtn.textContent = 'Submitting...';
    }

    setTimeout(function () {
      showSuccess();
    }, 1200);
  });

});
