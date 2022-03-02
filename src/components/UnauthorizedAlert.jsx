import Swal from "sweetalert2";

const UnauthorizedAlert = () => {
  Swal.fire({
    icon: "info",
    title: "",
    text: "Please Login or Signup to proceed further",
    showConfirmButton: false,
    timer: 1500
  });
};

export default UnauthorizedAlert;
