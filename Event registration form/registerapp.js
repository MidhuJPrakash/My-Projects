// $("#myform").validate({
//   submitHandler: function (form) {
//     form.submit();
//   },
// });
jQuery(document).ready(function () {
  console.log("readyyyy");
  jQuery("#myform").validate({
    rules: {
      fullname: {
        required: true,
      },
      email: {
        required: true,
        email: true, //add an email rule that will ensure the value entered is valid email id.
        maxlength: 255,
      },
      phonenumber: {
        required: true,
      } 
      // number_of_persons: {
      //   required: true,
      // }
    },
  });
});
