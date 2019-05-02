import Link from 'next/link'


class Home extends React.Component {

  state = {}

  render() {
    return (
      <>
        <div>Welcome to Next.js!</div>
        <Link href='/about'>About Page</Link>
        <br/>
        <h1>HumansBeingBros</h1>


        {this.state.bros? <div>{this.state.bros }</div>: <div>Loading...</div>}


      </>

    );
  }

  componentDidMount() {


    fetch('https://www.reddit.com/r/HumansBeingBros.json')
      .then(function(response) {
        return response.json();
      })
      .then((myJson)=> {


        let titles = myJson.data.children.map(child => child.data).map(data=>data.title)

        this.setState({bros: titles})
        console.log(JSON.stringify(titles));
      });

  }
}

export default Home
