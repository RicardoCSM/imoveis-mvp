'use client';

import React, { useRef, useState } from 'react'
import { GoogleMap, Libraries, MarkerF, StandaloneSearchBox, useJsApiLoader } from '@react-google-maps/api';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiEdit } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import Addresses from '../data/Addresses';
import IAddresses from '../interfaces/IAddresses';
import useEditModal from '../hooks/useEditModal';
import useAddModal from '../hooks/useAddModal';
import useAddressStore from '../hooks/useAddressStore';

const containerStyle = {
    width: '100%',
    height: '700px'
};

const libraries = ["drawing", "places"] as Libraries;

function Map() {
    const addresses = Addresses;
    const editModal = useEditModal();
    const addModal = useAddModal();
    const setSelectedAddressId = useAddressStore((state) => state.setSelectedAddressId);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API ?? '',
        libraries: libraries,
        language: 'pt-BR'
    })

    const searchBoxRef = useRef<google.maps.places.SearchBox>();
    const [coordinates, setCoordinates] = useState({
        lat: -18.92,
        lng: -46.94
    });
    const [zoom, setZoom] = useState<number | undefined>(6);
    const [map, setMap] = useState<google.maps.Map | undefined>(undefined)
    const onSearchBoxLoad = (ref: google.maps.places.SearchBox) => {
        searchBoxRef.current = ref;
    };

    const onPlacesChanged = () => {
        const searchBox = searchBoxRef.current

        if (!searchBox) return

        const places = searchBox.getPlaces()
        if (!places || places.length === 0) return

        const lat = places[0].geometry?.location?.lat()
        const lng = places[0].geometry?.location?.lng()

        if (lat && lng) {
            setZoom(18);
            setCoordinates({ lat, lng })
        }
    };

    const handleEditModalOpen = (addressId: number) => {
        editModal.onOpen();
        setSelectedAddressId(addressId);
    }

    const handleAddressMarkerClick = (address: IAddresses) => {
        const lat = address.lat;
        const lng = address.lng;
        setZoom(18);
        setCoordinates({ lat, lng })
    }

    const defaultMapOptions = {
        fullscreenControl: false,
        zoomControl: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
            position: map && google.maps.ControlPosition.RIGHT_BOTTOM,
            style: map && google.maps.MapTypeControlStyle.DEFAULT
        },
        streetViewControl: true,
    };

    return isLoaded ? (
        <div className="flex flex-col w-full">
            <div className="flex wfull justify-between">
                <h2 className="text-gray-600 mb-2">Você possui: {addresses.length} imóveis disponíveis</h2>
                <h2 onClick={addModal.onOpen} className="text-blue-700 hover:text-blue-900 mb-2 cursor-pointer">Adicionar novo imóvel</h2>
            </div>
            <GoogleMap
                onLoad={map => {
                    setMap(map)
                }}
                mapContainerStyle={containerStyle}
                center={{
                    lat: coordinates.lat,
                    lng: coordinates.lng,
                }}
                zoom={zoom}
                options={defaultMapOptions}
                onZoomChanged={() => {
                    if (map) {
                        setZoom(map.getZoom());
                        setCoordinates({ lat: map.getCenter()?.lat() || 0, lng: map.getCenter()?.lng() || 0 });
                    };
                }}
            >
                <div className="w-[22%] absolute ml-[10px] mt-[15px] overflow-x-auto h-[95%]">
                    <div className="w-full h-full overflow-y-auto no-scrollbar">
                        <div className="grid grid-rows-5 gap-4">
                            {addresses.map((address) => (
                                <div key={address.id} className="flex flex-col justify-center bg-white shadow-lg rounded-md h-[120px] p-2">
                                    <div className="flex gap-2 w-full h-1/5 justify-end">
                                        <FiEdit onClick={() => handleEditModalOpen(address.id)} className="cursor-pointer text-lg text-blue-700 hover:text-blue-900" />
                                        <LuMapPin onClick={() => handleAddressMarkerClick(address)} className="cursor-pointer text-lg text-blue-700 hover:text-blue-900" />
                                    </div>
                                    <div className="h-4/5">
                                        <h2 className="text-blue-900 font-medium text-lg mb-3">{address.city}</h2>
                                        <h3 className="text-sm text-gray-600">{address.street} - {address.neighborhood}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <StandaloneSearchBox
                    onLoad={onSearchBoxLoad}
                    onPlacesChanged={onPlacesChanged}
                >
                    <input
                        type="text"
                        placeholder="Procurar Localização"
                        className="
                        w-1/2 
                        h-[32px] 
                        pl-[20px] 
                        shadow-lg 
                        rounded-md 
                        text-[14px] 
                        outline-none 
                        text-ellipsis 
                        absolute 
                        left-[50%] 
                        ml-[-120px] 
                        mt-[15px]
                    "/>
                </StandaloneSearchBox>
                {addresses.map((address) => (
                    <MarkerF
                        key={address.id}
                        onClick={() => handleAddressMarkerClick(address)}
                        icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
                        position={{
                            lat: address.lat,
                            lng: address.lng,
                        }}
                    />
                ))}
            </GoogleMap>
        </div>
    ) : <></>
}

export default Map;