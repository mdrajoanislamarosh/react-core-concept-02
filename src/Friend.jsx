export default function Friend({friend}){
    // video-06
    const {id,name,username,email} = friend;
    return (
        <div className="box">
            <h5>ID:{    id} </h5>
            <h3>Name:    {name} </h3>
            <h5>UserName:   {username}  </h5>
            <h4>Email:  {email} </h4>
        </div>
    )
}