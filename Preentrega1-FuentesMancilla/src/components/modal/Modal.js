import React from 'react'


export const Modal = ({title,mensaje}) => {
  return (
    <>
        <div class="modal fade" id="modalitem" tabindex="-1" aria-labelledby="modalitem" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="modalitem">{title}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {mensaje}
                        </div>
                        <div class="modal-footer">
                           
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
