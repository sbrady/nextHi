import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

class Home extends React.Component {

  state = {}

  render() {
    return (
      <>
        <div>Welcome to Next.js!</div>
        <Link href='/about'>About Page</Link>
        <br/>
        <h1>HumansBeingBros</h1>


        {this.props.bros ? <div>{this.props.bros}</div> : <div>Loading...</div>}

      </>

    );
  }

}


 Home.getInitialProps = async () => {
  const res = await fetch('https://www.reddit.com/r/HumansBeingBros.json')
  const data = await res.json()
  let titles = data.data.children.map(child => child.data).map(data => data.title)
  return {
    bros: titles
  }


}



export default Home
