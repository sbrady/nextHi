import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

class Home extends React.Component {

  state = {
    bros: this.props.bros
  }

  render() {
    return (
      <>
        <div>Welcome to Next.js!</div>
        <Link href='/about'>About Page</Link>
        <br/>
        <h1>HumansBeingBros</h1>


        {this.state.bros ? <div>{this.state.bros}</div> : <div>Loading...</div>}

      </>

    );
  }




  componentDidMount() {

    fetchThatData().then(bros => {
      this.setState(bros)
    })

  }


}


 Home.getInitialProps = async (context) => {

  if(process.browser) {
    return {
      bros: null
    }

  }

  console.log(context)

   return fetchThatData()

}

async function fetchThatData() {
  const res = await fetch('https://www.reddit.com/r/HumansBeingBros.json')
  const data = await res.json()
  let titles = data.data.children.map(child => child.data).map(data => data.title)
  return {
    bros: titles
  }
}



export default Home
