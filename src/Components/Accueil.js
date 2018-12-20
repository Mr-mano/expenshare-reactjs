import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Input, Button} from "reactstrap";



class Index extends Component {

constructor(props) {
    super(props);
    this.state = { slug: "", sharegroup: null };
}

handleChange(event) {
    event.preventDefault();
    this.setState({ slug: event.target.value });
}

handleCreate(event) {
    event.preventDefault();
    fetch('http://localhost:8888/dcdev/php/expenshare/public/sharegroup/', {
    method: 'POST',
    body: JSON.stringify({ slug: this.state.slug })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Nouveau groupe créé avec succès !');
    })
    .catch(err => alert('Erreur lors de la création du groupe'))
    ;
}

handleOpen(event) {
    event.preventDefault();
    fetch('http://localhost:8888/dcdev/php/expenshare/public/sharegroup/' + this.state.slug)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        this.setState({ sharegroup: JSON.parse(data) });
    })
    .catch(err => alert('Ce groupe n\'existe pas !'))
    ;
}

render() {

    if (this.state.sharegroup) {
    return <Redirect to={'/group/' + this.state.sharegroup.slug}/>
    }

    return (
        <Container>
        <Input type="text" value={this.state.slug} onChange={e => this.handleChange(e)} placeholder="Nom du groupe"/>
        <Button onClick={e => this.handleCreate(e)}>Créer</Button>
        <Button onClick={e => this.handleOpen(e)}>Ouvrir</Button>
        </Container>
    );
}
}

export default Index;