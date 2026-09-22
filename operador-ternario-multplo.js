let quartosDisponiveis = 5;
let reservaConfirmada = true;

let statusReserva = ( reservaConfirmada && quartosDisponiveis > 0 ) ? "Reserva confirmada"
                : (quartosDisponiveis > 0) ? "Aguardando comfirmação"
                : " sem quartos disponiveis";

                console.log(statusReserva); // saida: "Reserva confirmada"