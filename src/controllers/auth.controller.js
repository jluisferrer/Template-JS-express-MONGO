

export const register = (req, res) => {
    res.status(201).json(
        {
            sucess: true,
            message: "Register user successfully"
        }
    )
}

export const login = (req, res) => {
    res.status(200).json(
        {
            sucess: true,
            message: "Login user successfully"
        }
    )
}