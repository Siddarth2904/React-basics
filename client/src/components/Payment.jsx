import { useDispatch, useSelector } from "react-redux"
import { updateWallet } from "../Store"

const Payment = () => {
    const data = useSelector(state => state.user);
    const dispatch = useDispatch();
    const handleChange = () => {
        dispatch(updateWallet(2000));
    }
    return (
        <div>
            <h3>{data.name},{data.balance}</h3>
            <button onClick={handleChange}>Pay</button>
        </div>
    )
}

export default Payment