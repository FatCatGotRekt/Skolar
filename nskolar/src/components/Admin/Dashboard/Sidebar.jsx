import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiDashboard2Fill, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

    const location =useLocation();
  return (
    <VStack spacing={'8'} p={'16'} boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"} alignItems={'left'}>
        <LinkButton url={"dashboard"} Icon = {RiDashboardFill} text = "Dashboard" active = {location.pathname === "/admin/dashboard"}/>
        <LinkButton url={"createcourses"} Icon = {RiAddCircleFill} text = "Add Course" active = {location.pathname === "/admin/createcourses"} />
        <LinkButton url={"admincourses"} Icon = {RiEyeFill} text = "Courses" active = {location.pathname === "/admin/admincourses"} />
        <LinkButton url={"users"} Icon = {RiUser3Fill} text = "Users" active = {location.pathname === "/admin/users"} />

    </VStack>
  )
}

export default Sidebar

function LinkButton ({url, Icon, text, active}) {
    return (
        <Link to={`/admin/${url}`} >
            <Button fontSize={"larger"} variant = {"ghost"} colorScheme={active ? 'purple': ''} >
                <Icon style={{margin:'4px'}} />
                {text}
            </Button>
        </Link>
    )
}