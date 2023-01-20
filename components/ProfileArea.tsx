export function ProfileArea() {
    return (
        <div className="container inline-block mx-auto my-10 invisible h-0 lg:visible xl:visible">
            <div className="container mx-auto bg-zinc-700 rounded">
                <div className="container pl-6 pt-6 text-2xl font-semibold text-white">
                    #Profile
                </div>
                <div className="flex justify-center w-full">
                    <img className="rounded-full w-2/5 h-2/5 m-5"
                        src="https://avatars.githubusercontent.com/u/61136190?v=4"
                        alt="Sunset in the mountains"
                    />
                </div>
                <div className="p-6 w-full">
                    <span className="text-md font-semibold text-white">
                        <ul>
                            <li>■ Occupation</li>
                            <div className="p-2 inline-block text-white">
                                iOS Engineer
                            </div>
                            <br />
                            <li>■ Development Skills</li>
                            <div className="p-2 inline-block text-white">
                                Swift、SwiftUI、Python、Ruby、Rails、Dart、Flutter
                            </div>
                        </ul>

                    </span>
                </div>
            </div>
        </div>
    )
}