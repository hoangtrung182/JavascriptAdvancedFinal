const form = document.querySelector('#form-add');
const nameProduct = document.querySelector('#product-name');
const priceProduct = document.querySelector('#product-price');
const imageProduct = document.querySelector('#product-image');
const url = 'http://localhost:3000/products';


form.addEventListener('submit', (e) => {
	e.preventDefault();

	if(nameProduct.value === "") {
		alert("Tên không được để trống");
		return;
	}
	if(priceProduct.value === "") {
		alert("Giá không được để trống");
		return;
	}
	if(imageProduct.value === "") {
		alert("Ảnh bắt buộc phải có");
		return;
	}

	const newProduct = {
		name: nameProduct.value,
		price: priceProduct.value,
		image: imageProduct.value
	}

	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(newProduct)
	}).then(() => {
		alert("Thêm sản phẩm thành công");
		// console.log("Thêm sản phẩm thành công")
		return window.location.href = 'http://127.0.0.1:8080/public/'
	}).catch(err => console.log(err))
})