class Api::V1::BooksController < Api::V1::BaseController
  def index
    respond_with Book.all
  end

  def create
    respond_with :api, :v1, Book.create(book_params)
  end

  def destroy
    respond_with Book.destroy(params[:id])
  end

  private

  def book_params
    params.require(:book).permit(:id, :author, :title, :year)
  end
end
