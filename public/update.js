const url = 'http://localhost:3000/products';

const params = new URLSearchParams(document.location.search);
const id = params.get('id');

const content = document.querySelector('#updateSp')
fetch(`${url}/${id}`)
	.then(res => res.json())
	.then(data => {
		content.innerHTML = `
		    <form id="form-add">
		      <div class="mb-3">
		        <label class="form-label">Tên sản phẩm</label>
		        <input type="text" class="form-control" id="product-name" value="${data.name}">
		      </div>
		      <div class="mb-3">
		        <label class="form-label">Giá sản phẩm</label>
		        <input type="number" class="form-control" id="product-price" value="${data.price}">
		      </div>
		       <div class="mb-3">
		        <label class="form-label">Hình ảnh</label>
		        <input type="text" class="form-control" id="product-image" value="${data.image}">
		      </div>
		      
		      <button type="submit" class="btn btn-primary">Cập nhật</button>
		    </form>
		`
		const form = document.querySelector('#form-add');
		const nameProduct = document.querySelector('#product-name');
		const priceProduct = document.querySelector('#product-price');
		const imageProduct = document.querySelector('#product-image');


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
				id,
				name: nameProduct.value,
				price: priceProduct.value,
				image: imageProduct.value
			}

			fetch(`${url}/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(newProduct)
			}).then(() => {
				alert("Cập nhật sản phẩm thành công")
				return window.location.href = 'http://127.0.0.1:8080/public/'
			}).catch(err => console.log(err))

		})

	})