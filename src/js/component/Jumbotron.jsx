import React from "react";

export function Jumbotron() {
    return (
        <div className="jumbotron">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nemo
          iusto eius quo magni fugiat non in suscipit sed consectetur cum itaque
          totam labore, adipisci animi, consequuntur doloribus reprehenderit
          molestias!
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Call to Action
          </a>
        </p>
      </div>
    );
};