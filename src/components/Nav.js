function Nav({maxTemp, minTemp, sunny}) {
    return (
      <nav>
        <h2>Weather: {maxTemp} | {minTemp} | {sunny && "Have a nice day!"}</h2>
        <ul>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">Men's</a>
          </li>
          <li>
            <a href="">On the Street</a>
          </li>
          <li>
            <a href="">The Catwalk</a>
          </li>
          <li>
            <a href="">AdWatch</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </nav>
    );
  }
  export default Nav;