import {Button} from  'react-bootstrap'

function AddForm(props){
	const{onHandleAdd} = props
	return (
		<form onSubmit={onHandleAdd}>
			<input  name="name"  type="text"  placeholder="Enter name"/>
			<input  name="description"  type="text"  placeholder="Enter desc"/>
			<Button  type="submit"  >Submit</Button>
		</form>
	)
}

export default AddForm