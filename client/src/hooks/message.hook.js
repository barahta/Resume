import {useCallback} from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useMessage = () => {
    return useCallback(text => {
        if(text){
            toast(text,{
                theme: "light",
                style: {
                    color: 'white',
                }
            });
        }
    },[])
}