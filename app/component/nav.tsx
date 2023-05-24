'use client';
import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
//函数式组件 --- 怎么定义一个积木 --- 积木必须有返回值
// export default function 你的积木名称(){ retrun() }
// int 你的积木名称(你的形参){ return 0 }

export default function Nav(){
    return (
       <Navbar isBordered >
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" >
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>

       </Navbar>
    )
}