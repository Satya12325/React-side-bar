import styled from "styled-components";


const Drawer = styled.section`
border-top: 1px solid gray;
padding: 1rem;
width: 250px;
`

const DrawerItem = ({label, src}) => {
    return(
        <table>
            <tr>
                <td>
                <img width="40px" src={src} alt="" />
                </td>
                <td>
                    {/* <p>{label}</p> */}
                    {label}
                </td>
            </tr>
        </table>
    )
}

export default function SideBar(){
    return (
        <div style={{
            border: "1px solid rgb(219,219,219)",
            background: "rgb(255,255,255)",
            paddingTop: 60,
            maxHeight: "350px",
            overflowY: "auto"
        }} >
            <Drawer>
                <DrawerItem label="Inbox" src="https://image.shutterstock.com/image-vector/inbox-vector-icon-600w-545975686.jpg"/>
                <DrawerItem label="Starred" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeauJR7lywjkxls00Hh9YDByO348YZcbfHEw&usqp=CAU" />
                <DrawerItem label="Send email" src="https://image.shutterstock.com/image-vector/inbox-vector-icon-600w-545975686.jpg" />
                <DrawerItem label="Drafts" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeauJR7lywjkxls00Hh9YDByO348YZcbfHEw&usqp=CAU" />
            </Drawer>
            <Drawer>
                <DrawerItem label="Inbox" src="https://image.shutterstock.com/image-vector/inbox-vector-icon-600w-545975686.jpg"/>
                <DrawerItem label="Starred" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeauJR7lywjkxls00Hh9YDByO348YZcbfHEw&usqp=CAU" />
                <DrawerItem label="Send email" src="https://image.shutterstock.com/image-vector/inbox-vector-icon-600w-545975686.jpg" />
                <DrawerItem label="Drafts" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeauJR7lywjkxls00Hh9YDByO348YZcbfHEw&usqp=CAU" />
            </Drawer>
        </div>
    )
}