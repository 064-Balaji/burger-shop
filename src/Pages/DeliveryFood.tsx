
import { useState, useEffect } from 'react'

type Post = {
    id: number;
    title: string;
    body: string;
};

const DeliveryFood = () => {
    /**
     * We can get the values by defining a seperate states for all the values but we need to 
     * optimize the methodology by using single state that hsndles all the inputs
     * const [name, setName] = useState('');
     * const [foodType, setFoodType] = useState('veg'); 
     * const [isExpress, setIsExpress] = useState(false); 
     * const [paymentMethod, setPaymentMethod] = useState('');
     * const [quantity, setQuantity] = useState(1); 
     * const [additionalRequests, setAdditionalRequests] = useState(''); 
     */

    const [formData, setformData] = useState({
        name: "",
        foodType: "veg",
        isExpress: false,
        paymentMethod: '',
        quantity: 1,
        additionalRequests: ""
    })

    /**
     * Normal handle inputs (uncontrolled inputs):
     * 
     * - In an uncontrolled input, the form element keeps track of its own internal state.
     * - React doesn't directly control or track the input's value.
     * - You typically access the value using a ref when you need it (e.g., on form submission).
     * - These inputs work like traditional HTML form elements.
     */

    /**
     * Controlled inputs:
     * 
     * - In a controlled input, React takes full control of the form element's state.
     * - The value of the input is set using React's state (via `useState`).
     * - Any change in the input field triggers an event handler to update the state.
     * - The value in the field always reflects the current React state, making it easier to manage and validate.
     */

    const handleChange = (event: any) => {
        // This function is called whenever an input field changes (e.g., typing in a text field or checking a checkbox).
        // console.log(event);
        // Uncomment this to see the full event object (useful for debugging).

        // console.log(formData);
        // Uncomment this to see the current state of the formData object before any changes are applied.

        // console.log(event.target.name, event.target.value);
        // Uncomment this to log the name and value of the input field that triggered the event (useful for debugging).

        const { type } = event.target;
        // Extracts the 'type' attribute from the event target (the input field), 
        // which tells us whether it's a text input, checkbox, etc.
        console.log(type);
        // Logs the type of the input field (e.g., "text", "checkbox") to the console.
        setformData((prev) => ({
            // Updates the formData state with the new value. 
            // 'prev' is the previous state of formData.
            ...prev,
            // Spreads the previous formData state, so we don't lose any existing values in other fields.
            [event.target.name]:
                // Dynamically sets the value for the specific form field based on its 'name' attribute.
                type === "checkbox" ? event.target.checked : event.target.value
            // If the input type is a checkbox, it updates the state with 'checked' (true/false).
            // For other types (like text), it updates the state with the input's 'value'.
        }));
    }


    /**
     * useEffect
     * it will call automatically based on the dependency value provided
     * Dependency value will tell when the function should be called
     * useEffect (()={},[])  ===> ()=>{}-> Callback function [] -> dependency array
     * Consider this as an example i have an user and i need to check weather the user is having the session (session will be created when the user signin to the website we will see them in the future when we learn authentication)
     * const userIsThere = session?.user ? => retrurn an array or object or boolean
     */

    const [data, setData] = useState<Post[]>([]);  // Set the state type to an array of Post objects

    /**
     * useState is a React hook that creates a state variable called `data` and a function `setData` to update it.
     * Initially, `data` is set to `undefined`.
     */
    useEffect(() => {
        // This useEffect runs when the component is mounted (on the first render) because of the empty dependency array `[]`.
        console.log("Use effect is Working");
        /**
         * The fetch function makes an HTTP request to the given URL ('https://jsonplaceholder.typicode.com/posts/1').
         * It's retrieving some sample data (a post with ID 1) from the API.
         */
        fetch('https://jsonplaceholder.typicode.com/posts/1') // returns a response from the API
            .then(response => response.json()) // converts the response to a valid JSON object
            .then(json => {
                setData(json);
                // The JSON data (the fetched post) is now saved to the `data` state variable using setData.
            })
    }, []);
    /**
     * The empty dependency array `[]` means that this effect will only run once, when the component first loads.
     * It won't run again unless you change the dependencies (in this case, there are none).
     */

    console.log(data);
    /**
     * This will log the current value of `data`:
     * - Initially, it logs `undefined` (since useState initializes `data` as `undefined`).
     * - After the fetch completes, the effect updates `data`, and the new fetched data will be logged.
     */


    return (
        <div className="max-w-lg mx-auto p-6 shadow-lg rounded-lg my-5 bg-slate-300">
 {data && data.map((post) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))}
            <h1 className="text-3xl font-semibold text-center mb-6">Order Your Food</h1>
            <form className="flex flex-col gap-4">
                <div>
                    <label className="block font-medium">Name:</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border border-gray-300 p-2 rounded"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block font-medium">Food Type:</label>
                    <div className="flex gap-4">
                        <label>
                            <input
                                type="radio"
                                name="foodType"
                                value="veg"
                                checked={formData.foodType === 'veg'}
                                onChange={handleChange}
                            />
                            <span className="ml-2">Veg</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="foodType"
                                value="non-veg"
                                checked={formData.foodType === 'non-veg'}
                                onChange={handleChange}
                            />
                            <span className="ml-2">Non-Veg</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block font-medium">Payment Method:</label>
                    <select
                        name="paymentMethod"
                        className="w-full border border-gray-300 p-2 rounded"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select Payment Method</option>
                        <option value="card">Credit/Debit Card</option>
                        <option value="cash">Cash on Delivery</option>
                        <option value="upi">UPI</option>
                    </select>
                </div>

                <div>
                    <label className="block font-medium">Quantity:</label>
                    <input
                        type="number"
                        name="quantity"
                        min="1"
                        className="w-full border border-gray-300 p-2 rounded"
                        value={formData.quantity}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block font-medium">
                        <input
                            type="checkbox"
                            name="isExpress"
                            className="mr-2"
                            checked={formData.isExpress}
                            onChange={handleChange}
                        />
                        Express Delivery
                    </label>
                </div>

                <div>
                    <label className="block font-medium">Additional Requests:</label>
                    <textarea
                        name="additionalRequests"
                        className="w-full border border-gray-300 p-2 rounded"
                        placeholder="Any additional requests?"
                        onChange={handleChange}
                        value={formData.additionalRequests}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
                >
                    Submit Order
                </button>
            </form>
        </div>
    );
};

export default DeliveryFood;