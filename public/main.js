const content = document.querySelector('#content');
const url = 'http://localhost:3000/products';

const deleteProduct = (id) => {
	fetch(`${url}/${id}`, {
		method: "DELETE"
	})
}

const render = () => {
	fetch(url)
		.then(res => res.json())
		.then(data => {
			// console.log(data)
			content.innerHTML = data.map((item, index) => {
				return `
					<tr>
		                <td>${index + 1}</td>
		                <td>${item.name}</td>
		                <td>${item.price}</td>
		                <td><img src="${item.image}" alt=""></td></td>
		                <td>
		                	<button class="btn-delete btn btn-danger" data-id="${item.id}">Xóa</button>
		                	<a href="./update.html?id=${item.id}" class="btn btn-primary"><button>Cập nhật</button></a>
		                </td>
		            </tr>
				`
			}).join('')
		})

		content.addEventListener('click', (e) => {
			if(e.target.classList.contains('btn-delete')) {
				const { id } = e.target.dataset;
				// console.log(id)
				const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
				if(!confirm) return;
				alert('Xóa thành công')
				return deleteProduct(id)
			}
		})
}

render();