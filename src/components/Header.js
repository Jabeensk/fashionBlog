function Header(props) {
  const {user, 
    dept, 
    admin, 
    style, 
    age=18} = props;


  
    return (
      <header style={style}>
        <h1>Sartre's List</h1>
        <h2>Better-Dressed People</h2>

        <h3>Hello,{user}, Dept {dept}</h3>

        <h4>{admin ? "Admin": "Normal User"}</h4>
        <h5>Age: {age}</h5>
      </header>
    );
  }
  export default Header
  