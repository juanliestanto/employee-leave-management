import AxiosInstance from "../../api/axiosInstance"

function EmployeeService(){
    const getAllEmployee = async() => {
        const res = await AxiosInstance.get("/employee")

        if(res.status !== 200){
            console.log(res)
            throw new Error("Couldn't get all employees")
        }

        return res.data.data
    }

    const deleteEmployee = async (id) => {
        const res =  await AxiosInstance.delete(`/employee/${id}`)

        if(res.status !== 200){
            console.log(res)
            throw new Error("Couldn't get all employees")
        }
    }

    return { getAllEmployee, deleteEmployee }
}

export default EmployeeService;