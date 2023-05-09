class Api::V1::BaseController < ApplicationController
  # Common code for your API controllers can go here

  skip_before_action :verify_authenticity_token
end
