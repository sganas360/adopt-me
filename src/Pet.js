const Pet = props => {
    return  (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.animal}</h2>
            <h2>{props.breed}</h2>
        </div>
    )
}

// const Pet = () => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, "Luna"),
//       React.createElement("h2", {}, "Dog"),
//       React.createElement("h2", {}, "Havanese"),
//     ]);
//   };

export default Pet;