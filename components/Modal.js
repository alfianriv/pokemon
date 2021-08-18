import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect, useRef } from "react";

export default function Modal({ open, pokemon, onClose }) {
	let [isOpen, setIsOpen] = useState(false);
	let completeButtonRef = useRef(null);
  const [name, setName] = useState("")
  const [error, setError] = useState(null)

	useEffect(() => {
		setIsOpen(open);
	}, [open]);

	function closeModal() {
    onClose()
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

  function onSubmit(){
    if(name){
      let pokemonList = JSON.parse(localStorage.getItem("pokemon")) || {}
      if(pokemonList[pokemon.name] && pokemonList[pokemon.name].find(val => val.nickname == name)){
        setError("Pokemon name already use")
      }else{
        setError(null)
        setName("")
        if(!pokemonList[pokemon.name]){
          pokemonList[pokemon.name] = []
        }
        pokemonList[pokemon.name].push({
          nickname: name.toLocaleLowerCase(),
          name: pokemon.name,
          image: pokemon.image
        })
        localStorage.setItem("pokemon", JSON.stringify(pokemonList))
        closeModal()
      }
    }else{
      setError("Please enter a name")
    }
  }

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					initialFocus={completeButtonRef}
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto"
					onClose={closeModal}
				>
					<div className="min-h-screen px-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span
							className="inline-block h-screen align-middle"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
								<Dialog.Title
									as="h3"
									className="text-lg font-medium leading-6 text-gray-900"
								>
									Success catch {pokemon.name}
								</Dialog.Title>
								<div className="mt-2">
									<p className="text-sm text-gray-500">
										Please add nickname to your pokemon
									</p>
									<input
										className="w-full py-2 px-3 bg-gray-200 rounded"
										type="text"
										name=""
										id=""
										placeholder="Nickname pokemon"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
									/>
                  <span className="text-red-400 text-xs">{error}</span>
								</div>

								<div className="mt-4">
									<button
										ref={completeButtonRef}
										type="button"
										className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
										onClick={onSubmit}
									>
										Add to Pokedex
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
