import {Component} from "react";
import {handleNavigate} from "../global/navigate.js";

export default class extends Component {
    render() {
        return (
            <header className={"w-full flex"}>
                <section>
                    <h1
                        onClick={() => handleNavigate("/")}
                        className={"font-open-sans font-[700] text-[32px] cursor-pointer"}
                    >
                        {this.props.title}
                    </h1>
                    <p>{this.props.subtitle}</p>
                </section>

            </header>
        )
    }
}