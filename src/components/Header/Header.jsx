/* eslint-disable react/prop-types */

function Header() {
    return (
        <div className="border-b-2 mr-2 flex items-center justify-between h-full">
            <h1 className="flex items-center font-semibold" type="button">
                what is this
            </h1>
            <button className="flex px-4 py-2 items-center bg-secondary rounded">
                Join Our Discord Server
            </button>
        </div>
    );
}

export default Header;
