function SCP(scp){
    const item=scp.id;
    const containment=scp.containment;
    const description=scp.description;
    const image=scp.image;
    const type=scp.class;
    return(
    <div>
        <h1>Item#:{item}</h1>
        <h2>Class:{type}</h2>
        <h3>How to Contain {item}:</h3>
        <p>{containment}</p>
        <h3>Description:</h3>
        <p>{description}</p>
        <img src={image} alt={item}></img>
    </div>);
}

export default SCP;