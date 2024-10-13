import { Link } from 'react-router-dom';

function TestButton() {
    return (
        <div className="flex justify-center">
            <Link
                to="/MBTI-test"
                className="flex justify-center items-center rounded-md text-xl font-bold p-2 text-white bg-et-purple-gray text-center 
                        transition-transform transform hover:scale-105 
                        hover:text-et-olive-brown hover:bg-et-gray hover:cursor-pointer shadow-sm"
            >
                ทำแบบทดสอบ➜
            </Link>

        </div>
    );
}

export default TestButton;
