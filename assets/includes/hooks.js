import { useEffect } from 'react';

/**
 * The definition of the useOutsideClickListener callback
 * 
 * @callback OusideListenerCallback
 * @param {Event} event
 */

/**
 * A hook that executes a callback when a click event occurs
 * outside of the provided ref
 * 
 * @param {Object} ref 
 * @param {OusideListenerCallback} cb 
 */
export function useOutsideClickListener(ref, cb) {
    useEffect(() => {
        function handleOutsideClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                cb(event);
            }
        }

        document.addEventListener(
            'click',
            handleOutsideClick,
            {capture: true}
        );

        return () => {
            document.removeEventListener(
                'click',
                handleOutsideClick,
                {capture: true}
            );
        };
    }, [ref, cb])
}
