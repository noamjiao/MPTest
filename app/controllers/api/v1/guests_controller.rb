# frozen_string_literal: true

class Api::V1::GuestsController < Api::V1::BaseController
  def create
    guest = Guest.new(guest_params)

    if guest.save
      render json: { status: 'success', message: 'Guest created successfully' }, status: :created
    else
      render json: { status: 'error', message: guest.errors.full_messages.join(', ') }, status: :bad_request
    end
  end

  private

  def guest_params
    params.require(:guest).permit(:full_name, :phone_number)
  end
end
