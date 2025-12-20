export default function FormAuth({onAuth, psw, email}) {
    return (
        <form onSubmit={onAuth} className="modal-container">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={psw}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}