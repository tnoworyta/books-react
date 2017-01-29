class Api::V1::ChapterResource < JSONAPI::Resource
  attributes :title, :body
  has_one :book

  filter :book
end
