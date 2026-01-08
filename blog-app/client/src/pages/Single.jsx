import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          repudiandae et officiis cumque voluptates. Consequatur facere,
          voluptatibus quibusdam ex ea veniam explicabo itaque facilis! Nihil
          saepe eligendi a perspiciatis dolorem? Ex sit ipsam nisi vero quod
          optio sed praesentium dicta aut aspernatur fugiat dignissimos,
          pariatur facere, molestias animi maxime? Assumenda impedit expedita
          fugit nisi animi aspernatur pariatur deleniti minima deserunt
          doloribus tempore soluta accusamus perspiciatis, laboriosam, tenetur
          atque beatae libero voluptatem harum mollitia amet accusantium
          ducimus! Autem, cumque vero. Reprehenderit, quo similique harum
          molestiae accusantium dicta assumenda beatae maxime consectetur, quia,
          qui nemo quisquam dolores minima laudantium! Ratione neque,
          reprehenderit voluptatibus laborum, perspiciatis est quo architecto
          quis iste rem suscipit. Cum mollitia eum quo accusamus eos? Enim ullam
          odio officiis.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
