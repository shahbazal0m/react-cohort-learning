import { useState } from "react";

const TwoWayBindingRevise = () => {
    const [todos, settodos] = useState([
        { id: 1, title: "Furquan bhai kaam huaa kiyaa", isCompleted: false },
    ]);

    const [title, settitle] = useState("");
    const [completed, setcompleted] = useState(false);
    const [gender, setgender] = useState("male");
    const [city, setcity] = useState("mumbai");

    return (
        <div>
            <h1>Create Tasks</h1>
            <form>
                <input
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="title"
                />
                <br />
                <br />
                <input
                    onChange={(e) => setcompleted(e.target.checked)}
                    checked={completed}
                    type="checkbox"
                />
                Completed
                <br /> <br />
                <input
                    value="male"
                    onChange={(e) => setgender(e.target.value)}
                    checked={gender == "male" && true}
                    type="radio"
                />
                male
                <input
                    value="male"
                    onChange={(e) => setgender(e.target.value)}
                    checked={gender == "female" && true}
                    type="radio"
                />
                female
                <br />
                <br />
                <select value={city} onChange={(e) => setcity(e.target.value)}>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="kolkata">Kolkata</option>
                    <option value="bengaluru">Bengaluru</option>
                    <option value="chennai">Chennai</option>
                    {/* har option kaa value denaa jaruri hai */}
                </select>
                <br />
                <br />
                <button>Create Todo</button>
            </form>
        </div>
    );
};

export default TwoWayBindingRevise;
