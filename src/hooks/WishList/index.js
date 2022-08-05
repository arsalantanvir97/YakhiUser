import Swal from "sweetalert2";
import api from "../../utils/api";
export const CreateWishList = async (product, history) => {
  console.log("CreateWishListCreateWishList");
  console.log("prodiucttttt", product);
  const body = { product };
  const res = await api.post(`/wishList/createWishList`, body);
  console.log("res", res);
  if (res?.status == 201) {
    var existing = localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : [];
    console.log("existing", existing);
    existing.push(product);
    console.log("existing2", existing);
    localStorage.setItem("wishlist", JSON.stringify(existing));
    await Swal.fire({
      icon: "success",
      title: "",
      text: "Added to Wishlist",
      showConfirmButton: false,
      timer: 1500
    });
    history.replace("/WishList");
  } else if (res?.status == 204) {
    Swal.fire({
      icon: "info",
      title: "",
      text: "Already added to Wishlist",
      showConfirmButton: false,
      timer: 1500
    });
  }
};
