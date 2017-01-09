class Api::V1::BooksController < Api::V1::BaseController
  def index
    respond_with Book.all
  end
end
