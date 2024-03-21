
$(document).ready(function () {

    $.validator.addMethod("emailRegex", function (value, element) {
        return this.optional(element) || /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(value);
    }, "please provide valid email address");

    $(".next").click(function () {
        var form = $("#myform");
        form.validate({
            errorElement: 'span',
            errorClass: 'help-block',
            highlight: function (element, errorClass, validClass) {
                $(element).closest('.form-group').addClass("has-error");
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).closest('.form-group').removeClass("has-error");
            },
            rules: {
                firstname: {
                    required: true,
                    minlength: 6,
                },
                lastname: {
                    required: true,
                    minlength: 6,
                },
                zipcode: {
                    required: true,
                    minlength: 6,
                },
                address: {
                    required: true,
                    minlength: 6,
                },
                contactno: {
                    required: true,

                    minlength: 6,
                },
                email: {
                    required: true,
                    
                    emailRegex: true,

                },
                city: {
                    required: true,
                   
                },
                state: {
                    required: true,
                    
                },
                country: {
                    required: true,
                    
                },
                language: {
                    required: true,
                   
                },
                dob: {
                    required: true,
                    
                },
                gender: {
                    required: true,
                   
                },
                companyname: {
                    required: true,
                    minlength: 6,
                },
                designation: {
                    required: true,
                    minlength: 6,
                },
                hometown: {
                    required: true,
                    minlength: 6,
                },
                pincode: {
                    required: true,
                    minlength: 6,
                },
                

            },
            messages: {
                firstname: {
                    required: "First Name required",
                },
                lastname: {
                    required: "Last Name required",
                },
                zipcode: {
                    required: "Zip Code required",
                },
                address: {
                    required: "Address required",
                },
                contactno: {
                    required: "Contact Number required",
                },
                email: {
                    required: "Email required",
                },
                city: {
                    required: "City required",
                },
                state: {
                    required: "State required",
                },
                country: {
                    required: "Country required",
                },
                language: {
                    required: "Language required",
                },
                dob: {
                    required: "Date of birth required",
                },
                gender: {
                    required: "Gender required",
                },
                companyname: {
                    required: "Company Name required",
                },
                designation: {
                    required: "Designation required",
                },
                hometown: {
                    required: "Home Town required",
                },
                pincode: {
                    required: "Pincode required",
                },
            }
        });
        if (form.valid() === true) {
            if ($('#account_information').is(":visible")) {
                current_fs = $('#account_information');
                next_fs = $('#company_information');
            } else if ($('#company_information').is(":visible")) {
                current_fs = $('#company_information');
                next_fs = $('#personal_information');
            }

            next_fs.show();
            current_fs.hide();
        }
    });

    $('#previous').click(function () {
        if ($('#company_information').is(":visible")) {
            current_fs = $('#company_information');
            next_fs = $('#account_information');
        } else if ($('#personal_information').is(":visible")) {
            current_fs = $('#personal_information');
            next_fs = $('#company_information');
        }
        next_fs.show();
        current_fs.hide();
    });






});
