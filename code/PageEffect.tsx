import * as React from "react"
import { Frame, Page, transform } from "framer"

const pages = [
    { title: "one" },
    { title: "two" },
    { title: "three" },
    { title: "four" },
]

const cardStyle = {
    fontSize: "42px",
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
}

export function PageEffect() {
    return (
        <Page
            width={"100%"}
            height={"100%"}
            gap={0}
            overflow={"visible"}
            effect={info => {
                const offset = info.normalizedOffset

                const opacity = transform(offset, [-1, 0, 1], [0, 1, 0])
                const scale = transform(offset, [-1, 0, 1], [0.1, 1, 0.1])
                const rotate = transform(offset, [-1, 0, 1], [180, 0, 180])

                return {
                    opacity,
                    scale,
                    rotate,
                }
            }}
        >
            {pages.map((page, index) => {
                return (
                    <Frame
                        size={"100%"}
                        background={"#1CB878"}
                        radius={10}
                        key={index}
                        style={cardStyle}
                    >
                        {page.title}
                    </Frame>
                )
            })}
        </Page>
    )
}
