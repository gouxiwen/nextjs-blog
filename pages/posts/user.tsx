import useSWR from 'swr'
import axios from 'axios'
import Layout from 'components/layout'

// 在客户端进行外部数据请求，使用useSWR hooks
// const todosEndpoint = "http://localhost:5000/user/info" //   外部服务的api
const todosEndpoint = "/api/info" // nextjs自带的路由api
export default function Profile(): JSX.Element {
    const getData: () => Promise<any> = async ()=> {
        const res = await axios.post(todosEndpoint);
        return res.data && res.data.data
    }
    const { data, error } = useSWR(todosEndpoint, getData, { refreshInterval: 0 })
    console.log('data', data)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <Layout>
            <div>hello {data.name}!</div>
        </Layout>
    )
}