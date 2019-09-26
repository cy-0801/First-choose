import React, { Component } from 'react'
import {Wrapper} from "./styled"
import Header from "@common/header"
export default class Login extends Component {
    render() {
        return (
            <Wrapper>
                <Header title="登录"></Header>
                <input className="input0" type="text" placeholder="手机号"/>
                <input className="input0" type="text" placeholder="密码"/>
                <button>登录</button>
                <div className="toggle">
                    <div className="small-font">
                        <div>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACKElEQVRYR8WXv04VQRSHPxITQqcdHZDYK70FJPRARWGhPoH6BOATqE8glBAKEh4AAg+AiY0FRq1sjZ2JBvIlZ8ks7OzM3XvJPcnNzWZ353znd/7M7AxTtpkp+2cIwCLwGniawP8AToG9UQMaBeAh8B54CfwEjoDf4VCYdUCQTeBzLUgtgM5PgCVgI6K97UNlPgTIauaZO1y1AMqrAyNtos4FuRsQwpaeraqBlYi+NirVMgWC7JRSUaOACxl5WnSldXX8IlLW+2wNgPL7K0aTeGpUK65ffCDyaHFNDeAKeDcigOm6gHKN1SgwBMBsmAZTN7gG7HcLyf9xTAgV7ITJKWC+t2O0+qITboiZCpVwSr6K1myt0wXQVHDnC0MogDcxxh1OrWC6AIb0fQ2Xw8n9o9VNXQA1ff8MOADmw/M3YC02qb4R7ThX4RsbAqDzM+APcBgrPQdmY/K5U3aZket8bIBfwBzgzG9sAVCFL8DyfQP8A45j3099mTqrPgVL709MgRyAk88qv3eAS0DJHydF5/X3qI1WjhMJJqaAzr4CD4DziFjp/0Zt5LpgYgA6EMKe1vH/TE3cBpkoQLO4Ry4HTE72wUXooo7Pko0CoGJaa3PLjeInPf2cQm3FxX6B1M6wSz7Gybl3EjourWhPQW9LElTed38xctdunZRz27EfH58ivw6Y4vE6A9LM/ke574m+E5EvW7n+j2PWk2p2nilqjmTjOC++O3WAa7s7fiH4ZcEhAAAAAElFTkSuQmCC" alt=""/>
                        </div>
                        <div>忘记密码</div>
                    </div>
                    <div className="small-font">
                        <div>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA+0lEQVRYR+2W4Q2CMBCFPzbQDdzAuIFOopuom8gEjqBuoBPoCG6geQkYQlpKK5WY3P0hBNr77sH1XsHIUYycn78BmADzSLVuwDO0JqTANSFxO6f2WPhAugBmwB0ogUOoEs/zDbAG/6fuAlgCJ2AP7BIBtG5rAKaAKQBMfYfSr9pwBZxdrWwApoApEPIDr8Y01GTTfd+op6imYVIbKlETICa51qq4ehwPAuCqXFZN4bNeWQFkWI4VgCqU9WpHVoB6cyX1uaasAJJf57uuUuORSwEZ0m9MqYxp0jRUQUPY8kulkLN9Q+dAc5Fkjg11h+vn/OwTAxCbvNf7BvAGJoBjIRa5KqsAAAAASUVORK5CYII=" alt=""/>
                        </div>
                        <div>快速注册</div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

