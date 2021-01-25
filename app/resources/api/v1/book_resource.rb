class Api::V1::BookResource < JSONAPI::Resource
  attributes :author, :title, :year
  has_many :chapters
end
