import { useState } from "react";

function Form() {
	const initialValue = {
		name : "",
		email: "",
		message:""
	}
	const [formData, setFormData] = useState(initialValue);
	const handleSubmit = (e) => {
		e.preventDefault();
		alert(JSON.stringify(formData));
		console.log(formData);
	}

	return(
		<form onSubmit={handleSubmit}>
			
			<label>Name: 
			<input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}></input>
			</label>
			<br/>
			<label>Email: 
			<input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})}></input>
			</label>
			<br/>
			<label>Message
			<input type="text" value={formData.message} onChange={(e) => setFormData({...formData, message:e.target.value})}></input>
			</label>
			<br/>
			<button type="submit">Submit</button>
		</form>
	)
}
export default Form;