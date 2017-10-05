const answer_hashes = { 
	'826daadfb0b9486a61801e48ed719e81a6bf7d11': 1,
	'770bf43798208e0f7b34ef91a344fd01ddceb18e': 1,
	'467a50271041fa79a7670fb03c645245faaaa49f': 1,
	'c7cf2b4ab7db6032ba5eaa9b0101b959312147b0': 1,
	'0fe507befdacae06447c33ea0cd36ac4510cf077': 1,
	'c72686450a7455f8f897b0a0b715f64d9954e961': 1,
	'ee98001f3012b6443c48ca2461ed41a34835deac': 1,
	'bfdd9f4fcb138b6323e33ed32610a5864f19188d': 1,
	'00a719b78d732e118f0c7b9d53f95c8211ee5d2b': 1,
	'ecb1a932794e6eaa6ab9e63bd573fb8371abdce8': 2,
	'0d874689611712486c82a9e6181a8a83a20ee126': 2,
	'098ab6c470760ed54c837405c402a79ef58b8666': 2,
	'efaa13250ddf072326323f22354d207363533230': 2,
	'c4c5b98d964319e334f46bba1bb4b1ffd835b934': 3,
	'e3b8e57ae30792335e7cfcb0498c89a863c8e3c7': 3,
	'9b895b4d5ad3b23f1e6d43fe7a855109f5f3c4e5': 3,
	'4eaa29e95e8466e254a4eda0000476d44627621a': 3, 
	'a1a315296f5023c6cf0eec44fc7e8e34aed651a9': 3,
}

const answer_check_button = document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault()
	let puzzle = document.querySelector("#puzzle").value
	let answer = document.querySelector("#answer").value

	let to_check = (puzzle + answer).toLowerCase()
	to_check = to_check.replace(/[^a-z]/g, "")
	console.log(to_check)

	let message = answer_hashes[sha1(to_check)]

	switch(message) {
		case 1:
			message = `Yes!  <strong>${answer}</strong> is the correct answer for ${puzzle}.`
			break
		case 2:
			message = `Sorry, <em>${answer}</em> is NOT the answer for ${puzzle}.  (Try removing the word "answer"...)`
			break
		case 3:
			message = `Sorry, <em>${answer}</em> is NOT the answer for ${puzzle}, but it is a clue intended to lead to the final answer.`
			break
		default:
			message = `Sorry, <em>${answer}</em> is NOT the answer for ${puzzle}.`
	} 

	document.querySelector("#results").innerHTML += `<p>${message}</p>`
	document.querySelector("#answer").value = ""
})

function check_answer(){
	let puzzle = document.querySelector("#puzzle").value
}