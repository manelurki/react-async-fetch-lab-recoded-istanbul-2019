 componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res=>res.json())
    .then(space => {
      this.setState({
        people: space.people
      })
    })

  }
