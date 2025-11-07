import {Component} from "react";
import {handleNavigate} from "../global/navigate.js";

export default class extends Component {
    render() {
        return (
            <header
                style={{
                    background: `linear-gradient(90deg, ${this.props.from}, ${this.props.to})`
                }}
                className="w-full flex flex-row items-center p-4 justify-between"
            >
                <section>
                    <h1
                        style={{ color: `${this.props.textTitleColor}` }}
                        onClick={() => handleNavigate("/")}
                        className="font-momo font-[700] text-[38px] cursor-pointer hover:opacity-70 transition-opacity duration-300"
                    >
                        {this.props.title}
                    </h1>
                    <p
                        style={{ color: `${this.props.textSubtitleColor}` }}
                        className="font-oswald font-[900] text-[16px] mt-[-10px] hover:opacity-70 transition-opacity duration-300"
                    >
                        {this.props.subtitle}
                    </p>
                </section>

                <section className={"flex gap-5"}>
                    {this.props.nav ? this.props.nav.map((nav, i) => (
                        <span key={i}>
                            <h3
                                className={"text-white transform-opacity cursor-pointer hover:opacity-40 duration-300 font-oswald font-[600] text-[18px]"}
                            >
                                {nav.text}
                            </h3>
                        </span>
                    )) : null}

                </section>

            </header>
        )
    }
}