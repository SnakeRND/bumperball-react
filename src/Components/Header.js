import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {

    if(this.props.data){
       var project = this.props.data.project;
       var github = this.props.data.github;
      var name = this.props.data.name;
      var nameh2 = this.props.data.nameh2;
      var description= this.props.data.description;
      var description2= this.props.data.description2;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Главная</a></li>
            <li><a className="smoothscroll" href="#about">О нас</a></li>
	         <li><a className="smoothscroll" href="#resume">Записаться</a></li>
            <li><a className="smoothscroll" href="#contact">Контакты</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
             <h2 className="responsive-headline">{nameh2}</h2>
            <h3>{description}</h3>
             <h3>{description2}</h3>
            <hr />
            <ul className="social">
               <a href={project} className="button btn project-btn"><i className="fa fa-book"></i>Заявка на игру&nbsp;&nbsp;&nbsp;&nbsp;</a>
               <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Купить сертификат</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
